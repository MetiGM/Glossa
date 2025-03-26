import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
    children: React.ReactNode;
}

const LandingLayout = ( {children}: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100">
        <Header />
       <main className="flex flex-1 flex-col items-center justify-center">{children}</main> 
       <Footer />
    </div>
  )  
}

export default LandingLayout;