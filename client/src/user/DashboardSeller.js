
import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomeOutlined } from '@ant-design/icons';
import { createConnectAccount } from '../actions/stripe'
import { useState } from "react";
import { toast } from 'react-toastify'

const DashboardSeller = () => {

    const { auth } = useSelector((state) => ({ ...state }))
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        setLoading(true)
        try {
            let res = await createConnectAccount(auth.token);
            console.log(res)
        } catch (err) {
            console.log(err)
            toast.error("Stripe connect failed, Try again.")
            setLoading(false)
        }
    }


    const connected = () => (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <h2>Your Hotels</h2>
                </div>
                <div className="col-md-2">
                    <Link to="/hotels/new" className="btn btn-primary">
                        + Add New
                    </Link>
                </div>
            </div>
        </div>
    )
    const notConnected = () => (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <div className="p-5 pointer">
                        <HomeOutlined className="h1" />
                        <h4>Setup payouts to post hotel rooms</h4>
                        <p>
                            MERN partners with stripe to transfer earnings to Your
                            bank account
                        </p>
                        <button
                            disabled={loading}
                            onClick={handleClick}
                            className="btn btn-primary mb-3">
                            {loading ? "Processing..." : "Setup Payouts"}
                        </button>
                        <p className="text-muted">
                            <small>
                                You'll be redirected to stripe to complete the
                                onboarding process.
                            </small>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )



    return (
        <>
            <div className="container-fluid bg-secondary p-5">

                <ConnectNav />

            </div>

            <div className="container-fluid p-4">
                <DashboardNav />
            </div>


            {auth &&
                auth.user &&
                auth.user.stripe_seller &&
                auth.user.stripe_seller.changes_enabled ? connected() : notConnected()

            }



            {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}

        </>
    )
}

export default DashboardSeller