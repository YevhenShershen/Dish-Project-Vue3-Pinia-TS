import instance from '@/services/request.services'
const postsEndPoint = 'posts/'

export async function loadPosts() {
  try {
    const { data } = await instance.get(postsEndPoint)
    return data
  } catch (err) {
    console.log(err)
  }
}
export async function addPost(addPost) {
  try {
    await instance.post(postsEndPoint, addPost)
  } catch (err) {
    console.log(err)
  }
}
export async function removePost(index) {
  try {
    const response = await instance.delete(postsEndPoint + index)
    return response
  } catch (err) {
    console.log(err)
  }
}
