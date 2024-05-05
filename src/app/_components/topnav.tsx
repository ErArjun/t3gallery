import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./upload-button";

export default function TopNav(){
    return(
       <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
         <div>Gallery</div>
         <div className="flex gap-5 items-center">
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                 <SimpleUploadButton/>
                <UserButton/>
            </SignedIn>
         </div>
       </nav>
    );
 }