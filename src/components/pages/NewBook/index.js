import React from 'react'
import Layout from "../../shared/Layout";
import Field from "../../shared/elements/Field";
import styles from './index.module.css'
import {useForm} from 'react-hook-form'
import {createBook} from "../../shared/hooks/createBooks";
import { useHistory } from "react-router";
import { bookPath } from "../../../helpers/routes";
import { yupResolver } from "@hookform/resolvers";
import * as yup from 'yup'
import { uploadFile } from "../../../helpers/filestack";
import Spinner from '../../shared/elements/Spinner'

const supportedFormats = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
]

const schema = yup.object().shape({
  id: yup.number().required(),
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
  const { errors, register, handleSubmit, formState: { isSubmitting } } = useForm({ resolver: yupResolver(schema) })

  const history = useHistory()

  const onSubmit = async ({cover, ...fields}) => {
    console.log('====================')
    const formData = new FormData()
    formData.append('fileUpload', cover[0])
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

    const newBookId = res.records[0].fields.id
    history.push(bookPath(newBookId))
  }

  return (
    <Layout>
      New Book

      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name='id' errors={errors} label='id' fieldType='number' className={styles.field} defaultValue={0} register={register}/>
        <Field name='title' errors={errors} label='title' className={styles.field} register={register(register)}/>
        <Field name='description' errors={errors} label='description' componentType='textarea' className={styles.field} register={register}/>
        <Field name='pages_count' errors={errors} label='pages_count' fieldType='number' className={styles.field} defaultValue={0} register={register}/>
        <Field name='min_price' errors={errors} label='min_price' fieldType='number' className={styles.field} defaultValue={200} register={register}/>
        <Field name='desired_price' errors={errors} label='desired_price' fieldType='number' className={styles.field} defaultValue={0} register={register}/>
        <Field name='current_sum' errors={errors} label='current_sum' fieldType='number' className={styles.field} defaultValue={0} register={register}/>
        <Field name='expected_sum' errors={errors} label='expected_sum' fieldType='number' className={styles.field} defaultValue={0} register={register}/>
        <Field name='cover' errors={errors} label='cover' className={styles.field} fieldType='file' register={register}/>

        <label htmlFor='authors' className={styles.selectLabel}>authors</label>
        <select
          multiple size="2"
          ref={register}
          className={styles.selectOptions}
          name='authors'
          // id=''
        >
          <option value="recVx8icxEXurDxHT">Валентин Катасонов</option>
          <option value="recrH9CWAnHettMWT">Иван Иванов</option>
          <option value="recbz8miPsA8SMiqh">Пётр Петров</option>
          <option value="recS0QURgF1zXzat4">Сидр Сидоров</option>
        </select>

        {errors && errors['authors'] && <span style={{color: 'red'}}>{errors['authors'].message}</span>}

        <br/>
        { isSubmitting
          ? <Spinner />
          : <button className={styles.submitButton}>Add book</button>
        }
      </form>
    </Layout>
  )

}

export default NewBook
