
export async function handler(event: any, context: any): Promise<any> {
    console.log('Event ==>', event);
    console.log('Context ==>', context);

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Hello, CDK! You've hit ${event.path}\n`
    }


}