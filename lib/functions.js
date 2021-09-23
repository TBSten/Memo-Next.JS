
export function saveMemos(memos){
    const data = {
        "memos":memos
    };
    return fetch('/api/memos/save', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}
export function getMemos(){
    return fetch("/api/memos/").then(res => res.json())
    
}

