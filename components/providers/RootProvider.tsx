"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import React, { PropsWithChildren, useState } from 'react'
const RootProvider = ({children}: PropsWithChildren) => {
  const [queryClient] =useState(() => new QueryClient({}))
  return (
    <QueryClientProvider client={queryClient}>

   <ThemeProvider
   attribute="class"
   defaultTheme="dark"
   >
{children}
   </ThemeProvider>
   <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
  )
}

export default RootProvider
