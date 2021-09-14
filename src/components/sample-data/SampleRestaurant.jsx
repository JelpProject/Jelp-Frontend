export default [
  {
    id: 1,
    name: "Small Lion Restaurant",
    address: "4446 My Drive",
    phone: "347-291-2566",
    city: {
      id: 1,
      name: "New York",
      cityState: {
        id: 1,
        state: "NY"
      }
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique nunc libero, non vestibulum ipsum aliquam non. Nunc tempus varius accumsan. Sed scelerisque, libero sit amet gravida aliquam.",
    reviews: [
      {
        id: 1,
        userId: 1,
        restaurantId: 1,
        headline: "Excellent Food",
        rating: 5,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae accumsan elit. Mauris ac lacinia ante. Aenean facilisis eget tortor vel fermentum",
        user: {
          id: 1,
          firstName: "Jotaro",
          lastName: "Kujo",
          username: "notDio"
        }
      },
      {
        id: 2,
        userId: 2,
        restaurantId: 1,
        headline: "Excellent Food",
        rating: 3,
        detail: "Lorem ipsum dolor sit amet, consecg elit. Sed vitae accumsan elit. Mauris ac lacinia ante. As eget tortor vel fermentum",
        user: {
          id: 2,
          firstName: "Marcelina",
          lastName: "Hopkins",
          username: "chinevar"
        }
      },
      {
        id: 3,
        userId: 3,
        restaurantId: 1,
        headline: "Excellent Food",
        rating: 1,
        detail: "Lorem  sit amet, consecg elit. Sed viit. Mauris ac lacinia ante. As eget tortor velum",
        user: {
          id: 3,
          firstName: "Ed",
          lastName: "Crane",
          username: "istanted"
        }
      }
      
    ]
  },
  {
    id: 2,
    name: "Cat Provisions",
    address: "4682 Ripple Street",
    phone: "989-775-7070",
    city: {
      id: 2,
      name: "Mount Pleasant",
      cityState: {
        id: 2,
        state: "MI"
      }
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique nunc libero, non vestibulum ipsum aliquam non. Nunc tempus varius accumsan. Sed scelerisque, libero sit amet gravida aliquam.",
    reviews: []
  }
]