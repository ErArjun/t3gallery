import { clerkClient } from "@clerk/nextjs/server"
import { deleteImage, getImage } from "~/server/queries"
import { Button } from "./ui/button";

export default async function FullPageImageView(props:{id:number}){

    const image = await getImage(props.id)
    const uploaderInfo=await clerkClient.users.getUser(image.userId);

    return <div className="flex w-full h-full min-w-0">
   <div className="flex flex-shrink items-center justify-center">
     <img src={image.url} className="object-contain"/>
     </div>
     <div className="w-48 flex flex-col flex-shrink-0 border-l">
        <div className="text-lg border-b text-center p-2">{image.name}</div>
        <div className="flex flex-col p-2">
            <span>Uploaded By:</span>
            <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
            <span>Created On:</span>
            <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="p-2">
            <form action={async ()=>{
                "use server"
               await deleteImage(props.id)
            }}>
            <Button className="cursor-pointer" type="submit" variant="destructive">Delete</Button>
            </form> 
        </div>
     </div>
     </div>
}