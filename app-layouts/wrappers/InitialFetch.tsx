import { FunctionComponent, ReactNode, Suspense } from "react";

interface InitialFetchProps<T> {
    initialUrl: string;
    loading?: ReactNode;
    children(list: T[]): ReactNode;
    ky: string;
}

const InitialFetch = async <T,>({
    initialUrl,
    children,
    loading,
    ky
}: InitialFetchProps<T>) => {
    let list: T[] = [];
    const res: { [ky: string]: T[] } = await fetch(initialUrl).then(res => res.json())
    list = res[ky]

    return (
        <Suspense fallback={loading || <>Loading...</>}>
            {
                children(list)
            }
        </Suspense>
    );
}

export default InitialFetch;