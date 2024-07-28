import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Smile } from "lucide-react";

const emojis = [
  {
    id: "1",
    emoji: "😂",
  },
  {
    id: "4",
    emoji: "❤️",
  },
  {
    id: "3",
    emoji: "😎",
  },
  {
    id: "5",
    emoji: "🐶",
  },
  {
    id: "6",
    emoji: "🎊",
  },
  {
    id: "7",
    emoji: "🙏",
  },
];

const EmojiPicker = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="container">
      <h2 className="my-4 text-2xl font-semibold">Emoji Picker React</h2>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button size="icon" variant={"outline"}>
          😄
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className="flex gap-3 p-4 rounded-md w-full">
            {emojis.map((item) => (
              <DropdownMenuItem
                 className={buttonVariants({ size: 'icon', variant: 'outline'})}
                onClick={() => setInputValue(inputValue + item.emoji)}
              >
                {item.emoji}
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <textarea
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="w-full py-3 px-4 border border-zinc-500 rounded"
      />
    </div>
  );
};

export default EmojiPicker;
