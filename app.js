const file_upload_input = document.querySelector("#file-upload")
const imgPreview = document.querySelector(".image_preview")

file_upload_input.addEventListener("change", (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.addEventListener("load", (e)=>{
    const imgUrl = e.target.result
    imgPreview.setAttribute("src", imgUrl)
  })
  reader.readAsDataURL(file)
})

// progress input playing around 😅
const progress_input = document.querySelector("#progress_input")

progress_input.addEventListener("input", (e)=>{
  imgPreview.style.borderRadius = e.target.value+"px"
})

//color input and border to image function
const colour_input = document.querySelector("#colour_input")

colour_input.addEventListener("input", (e)=>{
  imgPreview.style.border = `8px solid ${e.target.value}`
})
