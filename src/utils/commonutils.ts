 

export const getInitials = (name:string, email:string) => {
  if (name && name.includes(' ')) {
    const parts = name.trim().split(/\s+/);
    const firstInitial = parts[0][0].toUpperCase();
    const lastInitial = parts[parts.length - 1][0].toUpperCase();
    return firstInitial + lastInitial;
  } else if (name) {
    return name.trim()[0].toUpperCase();
  } else if (email) {
    return email.trim()[0].toUpperCase();
  } else {
    return 'U';
  }
};
 
// utils/cloudinary.js
export const cloudinary = (id: string, t = "w_600,f_auto,q_auto") =>
  `https://res.cloudinary.com/dhvkeskni/image/upload/${t}/${id}`;

