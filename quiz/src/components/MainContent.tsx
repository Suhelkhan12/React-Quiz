import { MainComponentType } from "../types";

const MainContent = ({ children }: MainComponentType) => {
  return <main className="main">{children}</main>;
};

export default MainContent;
