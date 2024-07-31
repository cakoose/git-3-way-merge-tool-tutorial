export const main = async (args: Array<string>): Promise<void> => {
    if (args.length !== 2) {
        console.log(`Expecting exactly two arguments, got ${args}.`);
    } else {
        const [command, value] = args;
        switch (command) {
            case 'add': {
                const response = await fetch('https://example.com/api/v1/stuff', {
                    method: 'POST',
                    body: JSON.stringify({value}),
                });
                if (response.status < 200 || response.status > 299) {
                    throw new Error(`Failed to add value: ${response.statusText}.`);
                }
                break;
            }
            case 'delete': {
                const response = await fetch(`https://example.com/api/v1/stuff/${encodeURIComponent(value)}`, {
                    method: 'DELETE',
                });
                if (response.status < 200 || response.status > 299) {
                    throw new Error(`Failed to delete value: ${response.statusText}.`);
                }
                break;
            }
            default: {
                console.log(`Unknown command: ${JSON.stringify(command)}.`);
            }
        }
    }

    console.log('Done!');
}
