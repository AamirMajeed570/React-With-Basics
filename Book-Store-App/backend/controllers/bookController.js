import {Book} from '../model/Book.models.js'
export const createBookCtrl = async (req, res) => {
    try {
      const { title, author, publishYear } = req.body
      if (!title || !author || !publishYear) {
        res.status(404).json({ message: 'All fields are Required' })
      }
  
      const book = await Book.create({
        title,
        author,
        publishYear
      })
      return res
        .status(200)
        .json({ message: 'Book Created Succesfully', data: book })
    } catch (error) {
      console.log('Error Storing Book', error.message)
    }
  }

 export const getAllBooksCtrl = async (req, res) => {
    try {
      const bookFound = await Book.find({})
      return res
        .status(200)
        .send({
          message: 'Books are..',
          count: bookFound.length,
          data: bookFound
        })
    } catch (error) {
      console.log('Error in Getting Books ', error.message)
    }
  }

export const getParticularBookCtrl = async (req, res) => {
    try {
      const { id } = req.params
      const book = await Book.findById(id)
      return res.status(200).send(book)
    } catch (error) {
      console.log('Error in finding a single book', error.message)
    }
  }

  export const updateBookCtrl =  async (req, res) => {
    try {
      const { title, author, publishYear } = req.body
      if (!title || !author || !publishYear) {
        res.status(404).json({ message: 'All fields are Required' })
      }
      const { id } = req.params;
      const result = await Book.findByIdAndUpdate(id,{title,author,publishYear});
      if(!result){
          return res.status(400).json({message:"Book Not Found"})
      }
      return res.status(200).json({message:"Book Updated Succesfully",data:result})
    } catch (error) {
      console.log('Error Updating Book ', error.message)
    }
  }

  export const deleteBookCtrl = async(req,res)=>{
    try {
        // const {title,author,publishYear} = req.body;
        // if(!title || !author || !publishYear){
        //     return res.status(400).json({message:"All fields are Required"})
        // }
        const {id} =req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result)
            {
                return res.status(400).json({message:"Book Not Found"})

            }
        return res.status(200).json({message:"Book Deleted Succesfully"})  
    } catch (error) {
        console.log("Error Deleting Book ",error.message);
    }
}