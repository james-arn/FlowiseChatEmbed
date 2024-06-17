import { Accessor } from "solid-js";

type Props = {
  position: Accessor<{
    bottom: number;
    right: number;
  }>
  helperText?: string
  toggleBot: () => void
  backgroundColor?: string;
  dragAndDrop: boolean;
  buttonSize: number;
};

const defaultButtonColor = '#3B81F6';

export const BubbleLabel = (props: Props) => (
  <div
    class="fixed flex items-center"
    style={{
      height: `${props.buttonSize}px`,
      'z-index': 42424242,
      right: `${props.position().right + props.buttonSize}px`,
      bottom: `${props.position().bottom}px`,
    }}>
    <button
      onClick={() => props.toggleBot()}
      class="
        shadow-lg rounded-2xl hover:scale-105 active:scale-95 transition-transform duration-200 
        flex justify-center items-center cursor-pointer animate-fade-in
        px-4 py-4 mr-3"
      style={{
        'background-color': props.backgroundColor ?? defaultButtonColor,
        width: 'auto',
        height: 'auto',
        cursor: props.dragAndDrop ? 'grab' : 'pointer',
      }}
    >
      <span
        class="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"
        style={{ "min-width": '12px' }}
      />
      <label class="text-white text-md"
        style={{
          cursor: props.dragAndDrop ? 'grab' : 'pointer',
        }}
      >{props.helperText}</label>
    </button>
  </div>
);
