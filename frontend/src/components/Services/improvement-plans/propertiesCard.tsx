
import { PropertiesCardType } from "../../../types";
import { renderRichText } from "../../../helpers/RichTextProcessor";

type propertiesCardProps = {
  card: PropertiesCardType;
};




export default function PropertiesCard({ card }: propertiesCardProps) {

// console.log(card)

    return (
    <div>
      <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
        <path
          d="M29.6931 14.2283L22.7556 6.87823C22.3292 6.426 21.6175 6.40538 21.1652 6.83212C20.7137 7.25851 20.6927 7.9706 21.1195 8.42248L27.3284 15L21.1195 21.5783C20.6927 22.0302 20.7137 22.7419 21.1652 23.1687C21.3827 23.3738 21.6606 23.4754 21.9374 23.4754C22.2363 23.4754 22.5348 23.3569 22.7557 23.1233L29.6932 15.7729C30.1022 15.339 30.1023 14.6618 29.6931 14.2283Z"
          fill="#2D3748"
        />
        <path
          d="M8.88087 21.578L2.67236 15L8.88087 8.42215C9.30726 7.97028 9.28664 7.25812 8.83476 6.83179C8.38323 6.4054 7.67073 6.42603 7.2444 6.87791L0.306858 14.2279C-0.102245 14.6614 -0.102245 15.3391 0.306858 15.7726L7.24475 23.123C7.466 23.3574 7.76413 23.4755 8.06302 23.4755C8.33976 23.4755 8.61767 23.3735 8.83476 23.1684C9.28705 22.742 9.30726 22.0299 8.88087 21.578Z"
          fill="#2D3748"
        />
        <path
          d="M16.8201 3.08774C16.2062 2.99476 15.6317 3.41622 15.5379 4.03011L12.2379 25.6302C12.1441 26.2445 12.566 26.8186 13.1803 26.9124C13.238 26.921 13.295 26.9252 13.3516 26.9252C13.898 26.9252 14.3773 26.5266 14.4624 25.97L17.7624 4.3699C17.8562 3.7556 17.4343 3.1815 16.8201 3.08774Z"
          fill="#4299E1"
        />
      </svg>
      {card.title && (
        <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
          {card.title}
        </h1>
      )}

      <p className="mt-2 text-gray-500 dark:text-gray-400">
        {card.body && (
          <div
            dangerouslySetInnerHTML={{
              __html: renderRichText(card.body),
            }}
          />
        )}
      </p>
    </div>
  );
}
