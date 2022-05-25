import {
    mediaHandlerConfig,
    createMediaHandler,
  } from "next-tinacms-cloudinary/dist/handlers";
  
  // import { isAuthorized } from "@tinacms/auth";
  
  export const config = mediaHandlerConfig;
  
  export default createMediaHandler({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    authorized: async (req, _res) => {
      if (process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT === "1") {
        return true;
      }
      try {
				//? hack for authorization
        const user = {
					id: 'asdasdq',
					email: 'asdadqwdqweq@wqne.ru',
					verified: true,
					role: 'admin',
					enabled: true,
					fullName: 'Dmitrye Dsqwee'
			};
        return user && user.verified;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
  });