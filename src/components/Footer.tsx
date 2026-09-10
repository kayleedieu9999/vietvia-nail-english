import AppStoreButton from "@/components/AppStoreButton";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-rose-100 bg-white px-5 py-8 text-center">
      <p className="text-sm font-bold text-slate-900">Ứng dụng VietVia</p>
      <div className="mt-2 flex justify-center">
        <AppStoreButton variant="text" />
      </div>
    </footer>
  );
}
