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

// BEGIN: /src/examples/pinia/users
type SrcExamplesPiniaUsersMainType = {
  state: { 
    users: any
  }
  actions: { 
    addUser: (options?: Record<string, any>) => Promise<unknown>
  }
  isLoading: { 
    addUser?: boolean
  }
}
// END: /src/examples/pinia/users

// BEGIN: /src/examples/simple/Blog
type SrcExamplesSimpleBlogMainType = {
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
// END: /src/examples/simple/Blog



type doubleTypes = {
  'examples/simple/Blog': ExamplesSimpleBlogMainType
  '/src/examples/pinia/users': SrcExamplesPiniaUsersMainType
  '/src/examples/simple/Blog': SrcExamplesSimpleBlogMainType
}
