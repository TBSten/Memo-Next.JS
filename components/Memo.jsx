import styles from "style/css/Memo.module.css" ;

export default function Memo(props){
    const {
        title,
        body,
        onChangeTitle,
        onChangeBody,
        onDelete,
        ...others
    } = props ;
    return (
        <div {...others} className={styles.memo}>
            <div>
                <input value={title} onChange={onChangeTitle}/>
                <button onClick={onDelete}>×</button>
            </div>
            <textarea 
                value={body} 
                onChange={onChangeBody}
                spellcheck="false"/>
        </div>
    ) ;
}