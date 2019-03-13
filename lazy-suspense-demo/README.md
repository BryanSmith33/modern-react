# React Lazy and Suspense


### Lazy
We will start with Lazy. We can use `lazy()` to lazy load a component. What that means is that we won't load the component until it is needed. A regular `import` statement will load all imports once the file is loaded

### Suspense
Suspense is a component created by React. It is a render prop. We pass it one single prop called `fallback`. `fallback` can be some JSX or another component. It will show this fallback component/jsx until the component it is wrapping is loaded and ready to be displayed.

We will often use `lazy()` for the component Suspense is wrapping.