import React, {Suspense} from "react";
import {Preloader} from "../components/common/Preloader/Preloader";


export function withSuspense<T> (Component: React.ComponentType<T>)  {
    return (props: any) => {
        //Suspense should be used conjunction with React.lazy
       return  <Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </Suspense>
    }
}

