export default function privateRoute() {
    return (
        <div>
            <h2>You cannot view in the browser</h2>
        </div>
    );
}

// this would be a private route, not accessible in the browser
// won't show up at localhost:3000/_lib

// if u actually want an underscore in your URL, use "%5F" instead. That's just the URL - encoded version of underscore