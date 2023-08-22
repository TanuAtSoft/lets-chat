export const isValidHttpUrl = (string) => {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
  
    return (url.protocol === "http:" || url.protocol === "https:");
  }

  export const validImageUrl = (str)=>{
    return (str.match(/\.(jpg|gif|png|jpeg)$/)!= null);
  }