// functions.test.js

// Import the functions to be tested
import { getSpace, getEntries } from '../contentfulAPI'; // Adjust the path to your actual functions file

// Mock the contentfulClient
jest.mock('../../config/contentfulClient', () => ({
  deliveryClient: {
    getSpace: jest.fn(),
    getEntries: jest.fn(),
    getContentTypes: jest.fn(),
  },
}));

// Destructure the mocked client to use in tests
const { deliveryClient: client } = require('../../config/contentfulClient');

describe('Contentful API Functions', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  describe('getSpace', () => {
    it('should call client.getSpace and log the space', async () => {
      const mockSpace = { sys: { id: 'mockSpaceId' } }; // Mock space response
      client.getSpace.mockResolvedValue(mockSpace);

      console.log = jest.fn(); // Mock console.log

      await getSpace();

      expect(client.getSpace).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith(mockSpace);
    });
  });

  describe('getEntries', () => {
    it('should return entries for a given content type', async () => {
      const mockEntries = {
        items: [
          { fields: { internalTitle: 'Test Entry 1' } },
          { fields: { internalTitle: 'Test Entry 2' } },
        ],
      };
      client.getEntries.mockResolvedValue(mockEntries);

      const result = await getEntries('testContentType');

      expect(client.getEntries).toHaveBeenCalledWith({
        content_type: 'testContentType',
        include: 10,
      });
      expect(result).toEqual(mockEntries.items);
    });

    it('should return the specific entry matching the internalTitle', async () => {
      const mockEntries = {
        items: [
          { fields: { internalTitle: 'Test Entry 1' } },
          { fields: { internalTitle: 'Test Entry 2' } },
        ],
      };
      client.getEntries.mockResolvedValue(mockEntries);

      const result = await getEntries('testContentType', 'Test Entry 2');

      expect(client.getEntries).toHaveBeenCalledWith({
        content_type: 'testContentType',
        include: 10,
      });
      expect(result).toEqual({ fields: { internalTitle: 'Test Entry 2' } });
    });

    it('should handle errors from client.getEntries', async () => {
      const mockError = new Error('Error fetching entries');
      client.getEntries.mockRejectedValue(mockError);

      await expect(getEntries('testContentType')).rejects.toThrow(
        'Error fetching entries'
      );

      expect(client.getEntries).toHaveBeenCalledWith({
        content_type: 'testContentType',
        include: 10,
      });
    });
  });
});

