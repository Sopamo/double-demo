// BEGIN: components/Blog
type ComponentsBlogMainType = {
  state: { 
    blogEntries: {
      1: {
      id: 5
    }
      3: {
      id: 6
    }
    }
  }
  actions: { 
    storeBlogEntry: (options?: Record<string, any>) => Promise<unknown>
  }
  isLoading: { 
    storeBlogEntry?: boolean
  }
}
// END: components/Blog

// BEGIN: pages/Recipes
type PagesRecipesMainType = {
  state: { 
    recipes: any
    data: {
      id: 5
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



type doubleTypes = {
  'components/Blog': ComponentsBlogMainType
  'pages/Recipes': PagesRecipesMainType
}
