export const apiRoutes = {
  property: {
    getAllProperties: () => "http://localhost:3001/property",
    getPropertyById: (id) => `http://localhost:3001/property/${id}`,
    createPropertyRoute: () => "http://localhost:3001/property/create-property",
    editPropertyRoute: () => "http://localhost:3001/property/edit-property",
    deletePropertyRoute: (id) => `http://localhost:3001/property/delete-property/${id}`,
    uploadImagesRoute: () => "http://localhost:3001/property/images"
    
  },
  user: {
    createUserRoute: () => "http://localhost:3001/user/create-user",
    loginUserRoute: () => "http://localhost:3001/user/login-user",
    getUserProperties: (id) => `http://localhost:3001/user/${id}/properties`,
    getUserBookingsRoute: () => `http://localhost:3001/user/bookings`,
    bookPropertyRoute: () => "http://localhost:3001/property/book-property",
    deleteBookingRoute: () => "http://localhost:3001/user/delete-booking",
    getUserBookings: () => "http://localhost:3001/user/get-user-bookings",
    editUserRoute: (id) => `http://localhost:3001/user/edit-user/${id}`,
    deleteUserRoute: (id) => `http://localhost:3001/user/delete-user/${id}`,
  },
};
