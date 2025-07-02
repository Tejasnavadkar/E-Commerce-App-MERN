import React, { useEffect, useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  brandsSelector,
  categoriesSelector,
  createProductAsync,
  fetchProductsById,
  ProductByIdSelector,
  resetSelectedProduct,
  updateProductByIdAsync,
} from "../../Product-List/ProductSlice";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Modal from "../../Common/Modal";

// {
//   "id": "1",
//   "title": "Essence Mascara Lash Princess",
//   "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//   "category": "beauty",
//   "price": 9.99,
//   "discountPercentage": 7.17,
//   "rating": 4.94,
//   "stock": 5,
//   "tags": [
//     "beauty",
//     "mascara"
//   ],
//   "brand": "Essence",
//   "sku": "RCH45Q1A",
//   "weight": 2,
//   "dimensions": {
//     "width": 23.17,
//     "height": 14.43,
//     "depth": 28.01
//   },
//   "warrantyInformation": "1 month warranty",
//   "shippingInformation": "Ships in 1 month",
//   "availabilityStatus": "Low Stock",
//   "reviews": [
//     {
//       "rating": 2,
//       "comment": "Very unhappy with my purchase!",
//       "date": "2024-05-23T08:56:21.618Z",
//       "reviewerName": "John Doe",
//       "reviewerEmail": "john.doe@x.dummyjson.com"
//     },
//     {
//       "rating": 2,
//       "comment": "Not as described!",
//       "date": "2024-05-23T08:56:21.618Z",
//       "reviewerName": "Nolan Gonzalez",
//       "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
//     },
//     {
//       "rating": 5,
//       "comment": "Very satisfied!",
//       "date": "2024-05-23T08:56:21.618Z",
//       "reviewerName": "Scarlett Wright",
//       "reviewerEmail": "scarlett.wright@x.dummyjson.com"
//     }
//   ],
//   "returnPolicy": "30 days return policy",
//   "minimumOrderQuantity": 24,
//   "meta": {
//     "createdAt": "2024-05-23T08:56:21.618Z",
//     "updatedAt": "2024-05-23T08:56:21.618Z",
//     "barcode": "9164035109868",
//     "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
//   },
//   "images": [
//     "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
//   ],
//   "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
// },

const ProductForm = () => {
  const brands = useSelector(brandsSelector);
  const categories = useSelector(categoriesSelector);
  const dispatch = useDispatch();
  const { id } = useParams();
  //  const resetSelectedProduct = useSelector(resetSelectedProduct)
  const selectedProduct = useSelector(ProductByIdSelector);
 
  const [isModalOpen, setModalopen] = useState(false);
  const navigate = useNavigate()
  console.log('selectedProduct--', selectedProduct?.length > 0)
  console.log('selectedProduct--', selectedProduct)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (id) {

      dispatch(fetchProductsById({ id }));
    }

     return ()=>{
      dispatch(resetSelectedProduct())  // here we create addition clean up fn so when we unmounted it reset selectted product state for that we created simple reducer function
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id && Object.keys(selectedProduct !== null && selectedProduct).length) {
      setValue("title", selectedProduct?.title);
      setValue("description", selectedProduct?.description);
      setValue("brand", selectedProduct?.brand);
      setValue("category", selectedProduct?.category);
      setValue("price", selectedProduct?.price);
      setValue("discountPercentage", selectedProduct?.discountPercentage);
      setValue("stock", selectedProduct?.stock);
      setValue("thumbnail", selectedProduct?.thumbnail);
      setValue("image1", selectedProduct?.images?.[0] || "");
      setValue("image2", selectedProduct?.images?.[2] || "");
      setValue("image3", selectedProduct?.images?.[3] || "");
    }

   
  }, [id, selectedProduct]);

  const handleForm = (data) => {
    // console.log('data',data)

    const product = { ...data };
    product.images = [product.image1, product.image2, product.image3];
    product.ratings = 0;
    product.discountPercentage = +data.discountPercentage;
    product.price = +data.price;
    delete product["image1"];
    delete product["image2"];
    delete product["image3"];

    // console.log('product',product)

    if (id && selectedProduct) {
      // here reuse the form if want to edit then dispatch edit else create
      // todo: make update product api
      // action to update
      product.id = selectedProduct.id;
      dispatch(updateProductByIdAsync(product));
      reset();
    } else {
      // action to create
      dispatch(createProductAsync(product));
      reset();
    }
  };

  const handleDelete = () => {
    const product = { ...selectedProduct };
    product.deleted = true;
    // here we not delete actually just add extra field delete in db and in ui we just filter out
    dispatch(updateProductByIdAsync(product));
  };

  return (
    <div>
       {/* delete modal  */}
          <Modal
            title={`Delete ${selectedProduct?.title}`}
            message={`Are you sure you want to delete this Item.`}
            dangerOption={`delete`}
            // dangerCallback={RemoveCartItem(item?.id)}
            cancleOption={`cancel`}
            openStatus={isModalOpen}
            onClose={() => setModalopen(false)}
            onDelete={() => handleDelete()}
          />
      <form onSubmit={handleSubmit(handleForm)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              { selectedProduct ?  "Edit Product" : "Add Product"}
            </h2>

            {selectedProduct?.deleted && <h2 className="text-red-500" >This Product is Deleted</h2>}

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                    <input
                      id="title"
                      {...register("title", { required: "title is required" })}
                      type="text"
                      placeholder="Product name"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                  {errors.title && (
                    <span className="text-xs text-red-500">
                      {errors?.title.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    {...register("description", {
                      required: "description is required",
                    })}
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    defaultValue={""}
                  />
                </div>
                {errors.description && (
                  <span className="text-xs text-red-500">
                    {errors?.description.message}
                  </span>
                )}
                <p className="mt-3 text-sm/6 text-gray-600">
                  Write a few sentences about product.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Brands
                </label>

                <select
                  {...register("brand", { required: "brand is required" })}
                  id="brands"
                  className="border rounded"
                >
                  <option value="chooseBrand">--Choose brand--</option>
                  {brands.map((brand,idx) => (
                    <option key={idx} value={brand.value}>{brand.label}</option>
                  ))}
                </select>
                {errors.brand && (
                  <span className="text-xs text-red-500">
                    {errors?.brand.message}
                  </span>
                )}
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Categories
                </label>

                <select
                  {...register("category", {
                    required: "category is required",
                  })}
                  id="category"
                  className="border rounded"
                >
                  <option value="chooseBrand">--Choose category--</option>
                  {categories.map((category) => (
                    <option value={category.value}>{category.label}</option>
                  ))}
                </select>
                {errors.category && (
                  <span className="text-xs text-red-500">
                    {errors?.category.message}
                  </span>
                )}
              </div>

              <div className="flex  gap-4 col-span-full">
                <div className="w-full">
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Price
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="price"
                        {...register("price", {
                          required: "price is required",
                          min: {
                            value: 100,
                            message: "Price must be at least 100",
                          },
                          max: {
                            value: 10000,
                            message: "Price cannot exceed 10000",
                          },
                        })}
                        type="number"
                        placeholder="Product price"
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      />
                    </div>
                    {errors.price && (
                      <span className="text-xs text-red-500">
                        {errors?.price.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Discount Percentage
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="discount"
                        {...register("discountPercentage")}
                        type="text"
                        placeholder="Product discount"
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Stock
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="stock"
                        {...register("stock", {
                          required: "stock is required",
                        })}
                        type="text"
                        placeholder="Product stock"
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      />
                    </div>
                    {errors.stock && (
                      <span className="text-xs text-red-500">
                        {errors?.stock.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Thumbnail
                </label>
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="thumbnail"
                    {...register("thumbnail", {
                      required: "thumnail is required",
                    })}
                    type="text"
                    placeholder="Product thumbnail"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
                {errors.thumbnail && (
                  <span className="text-xs text-red-500">
                    {errors?.thumbnail.message}
                  </span>
                )}
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Image 1
                </label>
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="image1"
                    {...register("image1", { required: "img-1 is required" })}
                    type="text"
                    placeholder="image"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
                {errors.image1 && (
                  <span className="text-xs text-red-500">
                    {errors?.image1.message}
                  </span>
                )}
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Image-2
                </label>
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="image2"
                    {...register("image2")}
                    type="text"
                    placeholder="image"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Image-3
                </label>
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="image3"
                    {...register("image3")}
                    type="text"
                    placeholder="image"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Extra</h2>

            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm/6 font-semibold text-gray-900">
                  By email
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          defaultChecked
                          id="comments"
                          name="comments"
                          type="checkbox"
                          aria-describedby="comments-description"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-900"
                      >
                        Comments
                      </label>
                      <p id="comments-description" className="text-gray-500">
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          aria-describedby="candidates-description"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-900"
                      >
                        Candidates
                      </label>
                      <p id="candidates-description" className="text-gray-500">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          aria-describedby="offers-description"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-900"
                      >
                        Offers
                      </label>
                      <p id="offers-description" className="text-gray-500">
                        Get notified when a candidate accepts or rejects an
                        offer.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm/6 font-semibold text-gray-900">
                  Push notifications
                </legend>
                <p className="mt-1 text-sm/6 text-gray-600">
                  These are delivered via SMS to your mobile phone.
                </p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      defaultChecked
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="push-email"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={()=>navigate('/admin')}
            className="text-sm/6 font-semibold text-gray-900 cursor-pointer"
           >
            Cancel
          </button>

         { selectedProduct && !selectedProduct?.deleted && <button
            onClick={(e) =>{
              e.preventDefault()
              setModalopen(true)
            }}
            type="button"
            className="text-sm/6 font-semibold text-red-500 cursor-pointer"
          >
            Delete
          </button>}
          <button
            type="submit"
            className="rounded-md cursor-pointer bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
