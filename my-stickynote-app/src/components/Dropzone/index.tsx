import './dropzone.css';
interface IDropzoneProps {
    children: React.ReactNode;
}

const DropZone: React.FC<IDropzoneProps> = ({ children }) => {
    return (
        <div className="dropzone-container">
            <div className="dropzone">{children}</div>
            <div className="trashzone">
                <h2>DRAG NOTE OVER HERE TO REMOVE IT</h2>
            </div>
        </div>
    )


}

export default DropZone;