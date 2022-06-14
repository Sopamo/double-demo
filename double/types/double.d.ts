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



type doubleTypes = {
  'components/Blog': ComponentsBlogMainType
  'pages/Recipes': PagesRecipesMainType
}
