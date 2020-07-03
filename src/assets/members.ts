import importAll from 'utils/importAll';
import Member from 'types/Member';

export const getInitialMembersState: () => Member[] = () => {
  const images = importAll(require.context('./img/members', false, /\.(png|jpe?g|svg)$/));

  const names = ["수정", "윤서", "성준", "원진", "효정", "원준", "탐", "홍덕", "아람", "나윤"]
  return images.map((image, i) => {
    const name = names[i];
    return { name, image, absent: false };
  });
};

interface EmojiExceptions {
  name: string;
  emoji: string;
};

export const emojiArray: EmojiExceptions[] = [
  {
    name: "Joy",
    emoji: "joyy",
  },
  {
    name: "Tasha",
    emoji: "tasha-new"
  },
];

const members = getInitialMembersState();

export default members;
