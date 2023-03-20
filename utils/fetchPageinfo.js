export const fetchPageinfo = async() =>  {
    const res  = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageinfo`);

    const data = await res.json()
    const pageInfo = data.pageInfo;

    return pageInfo
}