export const ColoredHeadBody = () => {
    return (
        <tbody>
            <tr>
                <td><code>{'<h1></h1>'}</code></td>
                <td><h1><span className="text-primary"> {'Heading 1'}</span>{" Sub Heading"}</h1></td>
            </tr>
            <tr>
                <td><code>{'<h2></h2>'}</code></td>
                <td><h2><span className="text-secondary"> {'Heading 2'}</span>{" Sub Heading"}</h2></td>
            </tr>
            <tr>
                <td><code>{'<h3></h3>'}</code></td>
                <td><h3><span className="text-success"> {'Heading 3'}</span>{" Sub Heading"}</h3></td>
            </tr>
            <tr>
                <td><code>{'<h4></h4>'}</code></td>
                <td><h4><span className="text-info"> {'Heading 4'}</span>{" Sub Heading"}</h4></td>
            </tr>
            <tr>
                <td><code>{'<h5></h5>'}</code></td>
                <td><h5><span className="text-warning"> {'Heading 5'}</span>{" Sub Heading"}</h5></td>
            </tr>
            <tr>
                <td className="pb-0"><code>{'<h6></h6>'}</code></td>
                <td className="pb-0"><h6><span className="text-danger"> {'Heading 6'}</span>{" Sub Heading"}</h6></td>
            </tr>
        </tbody>
    )
}
