// BEGIN: /src/examples/simple/Blog
type SrcExamplesSimpleBlogMainType = {
  state: { 
    blogEntries: {
      id: number
      title: string
      now: any
    }[]
  }
  actions: { 
    sendMessage: (options?: Record<string, any>) => Promise<unknown>
  }
  isLoading: { 
    sendMessage?: boolean
  }
}
// END: /src/examples/simple/Blog



type doubleTypes = {
  '/src/examples/simple/Blog': SrcExamplesSimpleBlogMainType
}
