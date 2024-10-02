export async function request(endpoint: string)
{
    // Query to the path
    const response = await fetch(endpoint)

    // return if error
    if (!response.ok)
    {
        throw new Error(`Not access the path: ${endpoint}`);
    }

    // console.log('Requested: ' + response)

    // OK
    // chuyển chuổi json thành 1 mảng các object
    return response.json();
}
