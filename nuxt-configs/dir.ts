type NuxtOptionDir = {[key in 'layouts' | 'pages']?: string};

export const getDir = (): NuxtOptionDir => {
  return {
    layouts: 'layouts',
    pages: 'pages'
  }
}
