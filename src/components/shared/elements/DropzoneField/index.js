import React, { useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './index.module.css'

function DropzoneField({ errors, setCoverFile }) {

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles)
      setCoverFile(acceptedFiles[0])
  }, [])

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop});

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className={styles.dropSection}>
      <div {...getRootProps()}>
        <input {...getInputProps({multiple: false})} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default DropzoneField
