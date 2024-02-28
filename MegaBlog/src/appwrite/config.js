import conf from '../config/conf'
import { Client, Account, ID  ,Databases , Storage , Query} from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor () {
        this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId)
          this.databases = new Databases(new Client);
          this.bucket = new Storage(new Client);
      }

      async createPost({title,slug,content,featuredImage,status,userId}){
            try {
                return this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId,
                    }
                )
            } catch (error) {
                console.log("Appwrite Error",error)
            }
      }

      async updatePost(slug, {title,content,featuredImage,status}){
            try {
                return this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                    }
                    );
            } catch (error) {
                console.log("Appwrite Error",error);
            }
      }

      async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite Error",error);
            return false;
        }
      }

      async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            ) 
        } catch (error) {
            console.log("Appwrite Error",error)
            return false;
        }
      }

      async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite Error",error)
            return false;
        }
      }

    //   File Upload Service
    async uploadFile(){
        try {
           return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
           
        } catch (error) {
            console.log("Appwrite Error::Upload",error)
            return false;
        }
    }
    
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite Error::Delete",error)
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service();

export default service;