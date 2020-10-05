import React, { useState } from 'react'
import Layout from "../../shared/Layout";
import Field from "../../shared/elements/Field";
import styles from './index.module.css'
import {useFieldArray, useForm} from 'react-hook-form'
import {createBook} from "../../shared/hooks/createBooks";
import { useHistory } from "react-router";
import { bookPath } from "../../../helpers/routes";
import { yupResolver } from "@hookform/resolvers";
import * as yup from 'yup'
import { uploadFile } from "../../../helpers/filestack";
import Spinner from '../../shared/elements/Spinner'
import useAuthors from "../../shared/hooks/useAuthors";
import DropzoneField from "../../shared/elements/DropzoneField";

const supportedFormats = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
]

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  pages_count: yup.number().required(),
  min_price: yup.number().min(100).required(),
  desired_price: yup.number().max(100000).required(),
  current_sum: yup.number().min(0).required(),
  expected_sum: yup.number().min(0).required(),
  authors: yup.array().required(),
  cover: yup.mixed()
    .test(
      "required",
      "A File is required",
      value => value && value.length > 0
    ).test(
      "fileFormat",
      "Unsupported format",
      value => value && value[0] && supportedFormats.includes(value[0].type)
    )
    .test(
      "fileSize",
      "File to large",
      value => value && value[0] && value[0].size <= 1000000
    )
})

const NewBook = () => {
  const { errors, register, handleSubmit, control, formState: { isSubmitting } } = useForm({ resolver: yupResolver(schema) })
  const [coverFile, setCoverFile] = useState(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'book'
  })

  const history = useHistory()

  const authors = useAuthors()
  if (!authors)
    return <div>Waiting...</div>

  const onSubmit = async ({...fields}) => {
    const formData = new FormData()
    formData.append('fileUpload', coverFile)
    const uploadResult = await uploadFile(formData)

    for (const key in fields) {
      if (!isNaN(parseFloat(fields[key]))) {
        fields[key] = parseFloat(fields[key])
      }
    }

    const res = await createBook({
      ...fields,
      cover: uploadResult.url
    })

    const newBookId = res.records[0].id
    history.push(bookPath(newBookId))
  }

  return (
    <Layout>
      New Book

      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name='title' errors={errors} label='title' className={styles.field} register={register(register)}/>
        <Field name='description' errors={errors} label='description' componentType='textarea' className={styles.field} register={register}/>
        <Field name='pages_count' errors={errors} label='pages_count' fieldType='number' className={styles.field} defaultValue={0} register={register}/>
        <Field name='min_price' errors={errors} label='min_price' fieldType='number' className={styles.field} defaultValue={200} register={register}/>
        <Field name='desired_price' errors={errors} label='desired_price' fieldType='number' className={styles.field} defaultValue={0} register={register}/>
        <Field name='current_sum' errors={errors} label='current_sum' fieldType='number' className={styles.field} defaultValue={0} register={register}/>
        <Field name='expected_sum' errors={errors} label='expected_sum' fieldType='number' className={styles.field} defaultValue={0} register={register}/>

        <DropzoneField errors={errors} setCoverFile={setCoverFile} register={register}/>

        <label htmlFor='authors' className={styles.selectLabel}>authors</label>

        { fields.map((field, index) => (
          <select
            key={index}
            ref={register}
            className={styles.selectOptions}
            name={`authors[${index}]`}
          >
            {authors.map((author) => (
              <option key={author.id} value={author.id}>{author.name}</option>
            ))}
          </select>
        ))}

        <button type="button" onClick={() => append({})}>append</button>

        {errors && errors['authors'] && <span style={{color: 'red'}}>{errors['authors'].message}</span>}

        <br/>
        { isSubmitting
          ? <Spinner />
          : <button type="submit" className={styles.submitButton}>Add book</button>
        }
      </form>
    </Layout>
  )

}

export default NewBook
