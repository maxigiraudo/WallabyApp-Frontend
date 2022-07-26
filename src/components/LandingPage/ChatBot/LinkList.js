import React from "react";
import styles from"./CSS/LinkList.module.css";



const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className={styles.item}>
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.url}
        > {link.text} </a>
    </li>
  ));

  return <ul className={styles.list}>{linkMarkup}</ul>;
};

export default LinkList;