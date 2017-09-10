import boto3
import zipfile
import StringIO
import mimetypes

def lambda_handler(event, context):
    
    try:
        s3 = boto3.resource('s3')
        sns = boto3.resource('sns')
        topic = sns.Topic('arn:aws:sns:us-east-1:502377633955:deployPortfolioTopic')
        
        portfolio_bucket = s3.Bucket('portfolio.bencochrane.info')
        build_bucket = s3.Bucket('portfoliobuild.bencochrane.info')
        
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm,
                    ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')        
        
        topic.publish(Subject="Portfolio Deploy Success", Message="Successfully Deployed Portfolio")
    
    except:
        topic.publish(Subject="Portfolio Deploy FAILURE", Message="FAILED to deploy portfolio")
        raise
    
    print "job done"
    return 'Hello from Lambda'