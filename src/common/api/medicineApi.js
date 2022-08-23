import { DeleteRequest, GetRequest, PostRequest, PutRequest } from "../Request"

export const AllGetmedicine = (path) => {
    return GetRequest("posts")
}

export const PostMedicine = ( data) => {
    return PostRequest("posts/", data )
}

export const DeleteMedicine = (id) => {
    return DeleteRequest("posts/", id)
}

export const PutMedicine = (data) => {
    return PutRequest("posts/", data )
}