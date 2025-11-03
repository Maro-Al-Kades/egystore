import { APP_NAME } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear} <span className="text-primary font-semibold">{APP_NAME}</span>
        &copy; جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
