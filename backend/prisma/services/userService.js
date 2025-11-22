import prisma from "../index.js";

export const createUser = async (
      email,
      name,
      password,
      Age,
    ) => {
  
  return await prisma.user.create({
    data: {
      email,
      name,
      password,
      Age
    },
  });
};

export const updateProfile = async ( userData , userId) => {
  const data = userData;
  return await prisma.user.update({
    where : {
      id : userId,
    },
    data 
  })
}

export const createAddress = async ( city , country , pincode , userId) => {

  return await prisma.address.create({
          data : {
            city,
            userId,
            country,
            pincode
          }
  });
};

export const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id,
    }
  });
};

export const getUser = async ( userID ) => {

      return await prisma.user.findMany({
        where : {
          id :{
            not : userID
          }
        },
          include : {
            Address : true
          }
      })
}

export const getMyinformation = async ( userId) => {
    return await prisma.user.findFirst({
      where : {
        id : userId
      },
      include : {
        Address : true,
        password : false,
        createdPlans : true,
        travelPlans : true,
      }
    })
}