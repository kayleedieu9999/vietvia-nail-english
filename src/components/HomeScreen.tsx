interface HomeScreenProps {
  onStart: () => void;
}

const checklist = [
  "Không cần đăng nhập",
  "Chỉ khoảng 2 phút",
  "Dành cho thợ nails ở Mỹ",
];

export default function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 py-10">
      <div className="w-full max-w-sm">
        <p className="text-center text-lg font-extrabold tracking-wide text-rose-500">
          VietVia
        </p>

        <h1 className="mt-6 text-center text-3xl font-extrabold leading-tight text-slate-900">
          HÔM NAY BẠN NÓI GÌ VỚI KHÁCH?
        </h1>

        <p className="mt-4 text-center text-base text-slate-600">
          5 câu tiếng Anh nghề nails — khoảng 2 phút
        </p>

        <button
          type="button"
          onClick={onStart}
          className="mt-8 w-full rounded-2xl bg-rose-500 px-6 py-5 text-lg font-bold text-white shadow-sm shadow-rose-300 transition active:scale-[0.98] active:bg-rose-600"
        >
          BẮT ĐẦU 5 CÂU
        </button>

        <ul className="mt-6 space-y-2">
          {checklist.map((item) => (
            <li
              key={item}
              className="flex items-center justify-center gap-2 text-sm text-slate-600"
            >
              <span className="text-emerald-500">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
