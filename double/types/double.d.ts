// BEGIN: pages/Recipes
type PagesRecipesMainType = {
  state: { 
    recipes: any
    data: {
      id: number
    }
  }
  actions: { 
    signup: (options?: Record<string, any>) => Promise<unknown>
    login: (options?: Record<string, any>) => Promise<unknown>
  }
  isLoading: { 
    signup?: boolean
    login?: boolean
  }
}
// END: pages/Recipes

// BEGIN: components/Blog
type ComponentsBlogMainType = {
  state: { 
    blogEntries: {
      id: number
      title: string
    }[]
  }
  actions: { 
    storeBlogEntry: (options?: Record<string, any>) => Promise<unknown>
  }
  isLoading: { 
    storeBlogEntry?: boolean
  }
}
// END: components/Blog

// BEGIN: simple/Blog
type SimpleBlogMainType = {
  state: { 
    blogEntries: {
      id: number
      title: string
    }[]
  }
  actions: { 
    storeBlogEntry: (options?: Record<string, any>) => Promise<unknown>
  }
  isLoading: { 
    storeBlogEntry?: boolean
  }
}
// END: simple/Blog

// BEGIN: examples/simple/Blog
type ExamplesSimpleBlogMainType = {
  state: { 
    blogEntries: {
      id: number
      title: string
    }[]
  }
  actions: { 
    storeBlogEntry: (options?: Record<string, any>) => Promise<unknown>
  }
  isLoading: { 
    storeBlogEntry?: boolean
  }
}
// END: examples/simple/Blog

// BEGIN: examples/pinia/users
type ExamplesPiniaUsersMainType = {
  state: { 
    users: {
      id: number
      name: string
    }[]
  }
  actions: { 
    addUser: (options?: Record<string, any>) => Promise<unknown>
  }
  isLoading: { 
    addUser?: boolean
  }
}
// END: examples/pinia/users



type doubleTypes = {
  'pages/Recipes': PagesRecipesMainType
  'components/Blog': ComponentsBlogMainType
  'simple/Blog': SimpleBlogMainType
  'examples/simple/Blog': ExamplesSimpleBlogMainType
  'examples/pinia/users': ExamplesPiniaUsersMainType
}
