'use client';
export const TagEditButton = () => {
  return (
    <button className="w-full h-[6rem] border-[0.3rem] border-white rounded-[3rem] bg-white/75 shadow-sm mb-16" onClick={() => console.log('タグフォームのモーダルオープン')}>
      <p className="font-normal text-[2rem] text-custom-black flex justify-center items-center">スケジュールタグ設定</p>
    </button>
  );
}
