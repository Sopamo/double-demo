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

// BEGIN: components/Blog
type ComponentsBlogMainType = {
  state: { 
    blogEntries: {
      1: {
      id: 5
      title: Why Pulp Fiction is such a good movie
    }
      4: {
      id: 6
      title: Should Shawshank Redemption really be the #1 IMDb movie?
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



type doubleTypes = {
  'pages/Recipes': PagesRecipesMainType
  'components/Blog': ComponentsBlogMainType
}
