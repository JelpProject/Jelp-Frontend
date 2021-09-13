export default [
  {
    id: 1,
    firstName: "Jotaro",
    lastName: "Kujo",
    username: "notDio",
    reviews: [
      {
        id: 1,
        userId: 1,
        restaurantId: 1,
        title: "Excellent Food",
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae accumsan elit. Mauris ac lacinia ante. Aenean facilisis eget tortor vel fermentum",
        restaurant: {
          id: 1,
          name: "Small Lion Restaurant"
        }
      },
      {
      id: 2,
      userId: 1,
      restaurantId: 2,
      title: "Bleh Food",
      rating: 1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae accumsan elit. Mauris ac lacinia ante. Aenean facilisis eget tortor vel fermentum. Donec placerat auctor enim eget vehicula molestie",
      restaurant: {
        id: 2,
        name: "The Nomad Cucina"
      }
      },
      {
        id: 3,
        userId: 1,
        restaurantId: 3,
        title: "Okay Food",
        rating: 3,
        description: "Lorem ipsum dolor sit apiscing elit. Sed vitae accumsan elit. Mauris ac lacinia ante. Aenean facilisis eget tortor vel fermentum. Donec placerat auctor enim eget vehicula molestie",
        restaurant: {
          id: 3,
          name: "Whispering Voila! Chophouse"
        }
      }
    ]
  },
  {
    id: 2,
    firstName: "Marcelina",
    lastName: "Hopkins",
    username: "chinevar",
    reviews: [
      {
        id: 4,
        userId: 2,
        restaurantId: 1,
        title: "Excellent Food",
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae accumsan elit. Mauris ac lacinia ante. Aenean facilisis eget tortor vel fermentum",
        restaurant: {
          id: 1,
          name: "Small Lion Restaurant"
        }
      },
      {
      id: 5,
      userId: 2,
      restaurantId: 2,
      title: "Bleh Food",
      rating: 1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae accumsan elit. Mauris ac lacinia ante. Aenean facilisis eget tortor vel fermentum. Donec placerat auctor enim eget vehicula molestie",
      restaurant: {
        id: 2,
        name: "The Nomad Cucina"
      }
      },
      {
        id: 6,
        userId: 2,
        restaurantId: 3,
        title: "Okay Food",
        rating: 3,
        description: "Lorem ipsum dolor sit apiscing elit. Sed vitae accumsan elit. Mauris ac lacinia ante. Aenean facilisis eget tortor vel fermentum. Donec placerat auctor enim eget vehicula molestie",
        restaurant: {
          id: 3,
          name: "Whispering Voila! Chophouse"
        }
      },
      {
        id: 7,
        userId: 2,
        restaurantId: 5,
        title: "Excellent Food",
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae accumsan elit. Mauris ac lacinia ante. Aenean facinec placerat auctor enim eget vehicula molestie",
        restaurant: {
          id: 5,
          name: "Thirsty Goblet Place"
        }
      },
      {
        id: 8,
        userId: 2,
        restaurantId: 6,
        title: "Could've been worse",
        rating: 2,
        description: "Lorem t, consectetur adipiscing elit. Sed vitae accumsan elit. Mauris ac lacinia ante. Aenean facilisis eget tortor vel fermentum. Donec placerat auctor enim eget vehicula molestie",
        restaurant: {
          id: 6,
          name: " Cat Provisions"
        }
      }
    ]
  },
  {
    id: 3,
    firstName: "Ed",
    lastName: "Crane",
    username: "istanted",
    reviews: []
  }
]