import { AvailableName, createPersonEntry, generateID } from '../contentfulClient'; // Asegúrate de poner la ruta correcta
import { managementClient } from '../contentfulClient'; // Importa tu client de Contentful o mockéalo
import { createAsset } from "../contentfulClient";



describe('generateID', () => {
  test('should return a string of length 36', () => {
    const id = generateID();
    expect(id).toHaveLength(36);
  });

  test('should return a string in UUID format', () => {
    const id = generateID();
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(id).toMatch(uuidRegex);
  });
});



jest.mock('../contentfulClient', () => {
  return {
    managementClient: {
      getSpace: jest.fn().mockResolvedValue({
        getEnvironment: jest.fn().mockResolvedValue({
          getEntries: jest.fn().mockResolvedValue({
            items: [
              { fields: { internalName: 'existingName1' } },
              { fields: { internalName: 'existingName2' } },
            ],
          }),
        }),
      }),
    },
  };
});

describe('AvailableName', () => {
  test('should return a unique name not present in the entries', async () => {
    const name = await AvailableName();
    expect(name).not.toBe('existingName1');
    expect(name).not.toBe('existingName2');
  });

  test('should call getSpace, getEnvironment, and getEntries once', async () => {
    await AvailableName();
    expect(managementClient.getSpace).toHaveBeenCalledTimes(1);
    expect(managementClient.getSpace).toHaveBeenCalledWith('spaceId');
    expect((await managementClient.getSpace('spaceId')).getEnvironment).toHaveBeenCalledWith('master');
    expect((await (await managementClient.getSpace('spaceId')).getEnvironment('master')).getEntries).toHaveBeenCalledTimes(1);
  });
});


describe("test de config",()=>{
    describe("createAsset",()=>{
        jest.setTimeout(30000);
        it("should create an asset successfully", async () => {
            const fileName = "1f53c05662ab47a7ff150276d28ca6bf";
            const fileContentType = "file/pdf";
            const filePath = "uploads\\1f53c05662ab47a7ff150276d28ca6bf";
    
            const result = await createAsset({
                fileName,
                fileContentType,
                filePath,
            });
    
            expect(result).toBeDefined();
            expect (result).not.toBeNull();
            // Add more assertions as needed
        });
    
        it("should throw an error when asset creation fails", async () => {
            const fileName = "test.jpg";
            const fileContentType = "image/jpeg";
            const filePath = "/path/to/nonexistent.jpg";
    
            await expect(
                createAsset({
                    fileName,
                    fileContentType,
                    filePath,
                })
            ).rejects.toThrow("Error al crear el asset");
        });
    })
})


jest.mock('../contentfulClient'); // Mockea el managementClient

const mockGetSpace = jest.fn();
const mockGetEnvironment = jest.fn();
const mockCreateEntry = jest.fn();
const mockPublish = jest.fn();

managementClient.getSpace = mockGetSpace.mockResolvedValue({
  getEnvironment: mockGetEnvironment.mockResolvedValue({
    createEntry: mockCreateEntry.mockResolvedValue({
      sys: { id: 'entry-id' },
      publish: mockPublish.mockResolvedValue({
        sys: { id: 'entry-id' },
      }),
    }),
  }),
});

describe('createPersonEntry', () => {
  it('should create and publish a person entry with provided fields', async () => {
    const result = await createPersonEntry({
      internalName: 'Internal Name',
      fullName: 'Full Name',
      email: 'test@example.com',
      cvAssetId: 'cv-id',
      jobEntryId: 'job-id',
      imageEntryId: 'image-id',
      reviewEntryId: 'review-id',
    });

    expect(mockGetSpace).toHaveBeenCalledWith('k9voop8uf94b');
    expect(mockGetEnvironment).toHaveBeenCalledWith('master');
    expect(mockCreateEntry).toHaveBeenCalledWith('person', {
      fields: {
        internalName: { 'en-US': 'Internal Name' },
        name: { 'en-US': 'Full Name' },
        email: { 'en-US': 'test@example.com' },
        cv: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'cv-id',
            },
          },
        },
        job: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: 'job-id',
            },
          },
        },
        image: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: 'image-id',
            },
          },
        },
        review: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: 'review-id',
            },
          },
        },
      },
    });
    expect(mockPublish).toHaveBeenCalled();
    expect(result).toBe('entry-id');
  });

  it('should handle missing optional fields', async () => {
    const result = await createPersonEntry({
      email: 'test@example.com',
    });

    expect(mockGetSpace).toHaveBeenCalledWith('k9voop8uf94b');
    expect(mockGetEnvironment).toHaveBeenCalledWith('master');
    expect(mockCreateEntry).toHaveBeenCalledWith('person', {
      fields: {
        internalName: { 'en-US': expect.any(String) }, // se usa AvailableName si no se proporciona internalName
        name: { 'en-US': 'PlaceHolderName' }, // Default Name
        email: { 'en-US': 'test@example.com' },
      },
    });
    expect(mockPublish).toHaveBeenCalled();
    expect(result).toBe('entry-id');
  });

  it('should throw an error if creation fails', async () => {
    mockCreateEntry.mockRejectedValueOnce(new Error('Creation failed'));

    await expect(
      createPersonEntry({
        email: 'test@example.com',
      })
    ).rejects.toThrow('Creation failed');
  });
});
