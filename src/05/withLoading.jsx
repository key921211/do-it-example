import React from 'react';

// 다중커링 전
// export default function withLoading(WrappedComponent, loadingMessage = '로딩 중') {
//   const { displayName, name: componentName } = WrappedComponent;
//   const wrappedComponentName = displayName || componentName;

//   function WithLoading({ isLoading, ...otherProps }) {
//     if (isLoading) return loadingMessage;

//     return <WrappedComponent {...otherProps} />;
//   }
//   WithLoading.displayName = `withLoading(${wrappedComponentName})`;
//   return WithLoading;
// }

//하이어오더 컴포넌트를 만들때는 컴포넌트 인자 하나만 전달해야한다.
//임의의 인자를 추가했으므로 다중 커링을 활용

export default function (loadingMessage = '로딩 중') {
  return function withLoading(WrappedComponent) {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoading({ isLoading, ...otherProps }) {
      if (isLoading) return loadingMessage;
      return <WrappedComponent {...otherProps} />;
    }

    WithLoading.displayNAme = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
}
